import { useGetCategories } from "@/hooks/queries";
import Link from "next/link";

function MainCategories() {
  const { data, isLoading } = useGetCategories(5);
  const newData = data?.slice(0, 5);
  console.log(newData);
  return (
    <div className="mt-10 container mx-auto px-10 sm:px-14">
      <ul className="flex flex-wrap gap-4 justify-center sm:justify-between">
        {newData?.map((category) => (
          <li key={category.id} >
            <Link href={category.slug} className="flex flex-col items-center">
              <img
                src={category.image}
                alt="Category"
                className="w-12 rounded-full sm:w-20"
              />
              <h4>{category.name}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainCategories;
