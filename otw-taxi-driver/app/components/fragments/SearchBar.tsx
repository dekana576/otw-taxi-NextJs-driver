"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@heroui/react";

export default function SearchBar() {
    return (
        <div className="w-full">
            <Input
                label=""
                placeholder="Search..."
                variant="bordered"
                startContent={
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "gray",}} />
                }
            />
        </div>
    )
}