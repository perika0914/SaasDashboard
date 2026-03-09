import { useState, useMemo, useEffect } from "react";
import debounce  from "lodash.debounce";

interface Props {
  onSearch: (value: string) => void;
  onStatus: (status: string) => void;
}

export default function CampaignFilters({ onSearch, onStatus }: Props) {
  const [value, setValue] = useState("");

  const debouncedSearch = useMemo(
    () =>
      debounce((val: string) => {
        onSearch(val);
      }, 400),
    [onSearch]
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setValue(v);
    debouncedSearch(v);
  };

  return (
    <div className="flex gap-4 mb-6">
      <input
        type="text"
        placeholder="Search campaigns..."
        value={value}
        onChange={handleChange}
        className="border rounded px-4 py-2 w-64"
      />

      <select
        onChange={(e) => onStatus(e.target.value)}
        className="border rounded px-4 py-2"
      >
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="Paused">Paused</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
}