"use client";
import { TrashIcon } from "@heroicons/react/24/outline";

interface DeleteButtonProps {
  productId: number;
  remove: (param: number) => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ productId, remove }) => {
  return (
    <div className="overflow-hidden rounded-lg">
      <div className="p-2">
        <button
          type="button"
          className="font-semibold text-black-500 bg-black px-4 text-sm py-2 rounded-md"
          onClick={() => remove(productId)}
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default DeleteButton;
