type Props = {
  page: number;
  total: number;
  limit: number;
  onChange: (page: number) => void;
};

export default function Pagination({
  page,
  total,
  limit,
  onChange,
}: Props) {

  const totalPages = Math.ceil(total / limit);

  const next = () => {
    if (page < totalPages) {
      onChange(page + 1);
    }
  };

  const prev = () => {
    if (page > 1) {
      onChange(page - 1);
    }
  };

  return (
    <div className="flex items-center justify-between mt-6">

      <button
        onClick={prev}
        disabled={page === 1}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        Previous
      </button>

      <span className="font-medium text-gray-700">
        {page} / {totalPages}
      </span>

      <button
        onClick={next}
        disabled={page === totalPages}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        Next
      </button>

    </div>
  );
}