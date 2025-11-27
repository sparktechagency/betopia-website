interface ContactCardProps {
  icon: string;
  title: string;
  titleHighlight: string;
  content: string[];
  bgColor: string;
}

export default function ContactCard({
  icon,
  title,
  titleHighlight,
  content,
}: ContactCardProps) {
  return (
    <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
      {/* Background Icon Pattern */}
      <div className="absolute right-4 top-0 opacity-5 group-hover:opacity-10 transition-opacity">
        <svg
          className="w-32 h-32 text-gray-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d={icon} />
        </svg>
      </div>

      {/* Icon Circle */}
      <div
        className={`bg-primary w-14 h-14 rounded-full flex items-center justify-center mb-4 relative z-10`}
      >
        <svg
          className="w-7 h-7 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d={icon} />
        </svg>
      </div>

      {/* Title */}
      <h4 className="text-lg font-semibold text-gray-800 mb-3 relative z-10">
        {title} <span className="text-primary">{titleHighlight}</span>
      </h4>

      {/* Content */}
      <div className="space-y-1 relative z-10">
        {content?.map((line, index) => (
          <p key={index} className="text-sm text-gray-600">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
