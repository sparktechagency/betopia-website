export interface DropdownItem {
    key: string;
    label: string;
    description: string;
    link: string;
}

export interface NavPage {
    name: string;
    link: string;
    hasDropdown?: boolean;
    dropdownItems?: DropdownItem[];
} 

