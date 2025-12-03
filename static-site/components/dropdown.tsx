'use client';

import { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface DropdownProps {
    trigger: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

export default function Dropdown({ trigger, children, className = '' }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div ref={dropdownRef} className={`relative inline-block ${className}`}>
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-1 focus:outline-none"
            >
                {trigger}
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg focus:outline-none">
                    <div className="py-1">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}