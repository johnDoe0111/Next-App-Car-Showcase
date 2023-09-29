'use client';

import { SearchManufacturerProps } from '@/types';
import { Combobox } from '@headlessui/react';
import Image from 'next/image';

const SearchManufactures = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="Car Logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
          />
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufactures;
