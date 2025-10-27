/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export interface FetchResponse {
  success: boolean;
  message?: string;
  data?: any;
  error?: string | null;
}

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface FetchOptions {
  method?: HttpMethod;
  body?: any;
  token?: string;
  headers?: Record<string, string>;
  cache?: RequestCache;
}

export const myFetch = async (
  url: string,
  {
    method = "GET",
    body,
    token,
    headers = {},
    cache = "force-cache",
  }: FetchOptions = {}
): Promise<FetchResponse> => {
  const isFormData = body instanceof FormData;
  const hasBody = method !== "GET" && body !== undefined;

  const reqHeaders: Record<string, string> = {
    Accept: "application/json",
    ...headers,
    ...(isFormData ? {} : { "Content-Type": "application/json" }),
    ...(token ? { Authorization: token } : {}),
  };

  try {
    const response = await fetch(`${process.env.BASE_URL}${url}`, {
      method,
      headers: reqHeaders,
      ...(hasBody && { body: isFormData ? body : JSON.stringify(body) }),
      cache: method === "GET" ? cache : "no-store",
    });

    const data = await response.json();

    return {
      success: response.ok,
      message: data?.message,
      data: data?.data ?? data,
      error: response.ok ? null : data?.error || "Request failed",
    };
  } catch (error) {
    return {
      success: false,
      message: "Network error",
      data: null,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
