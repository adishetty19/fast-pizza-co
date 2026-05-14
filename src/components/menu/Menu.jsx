import { useLoaderData } from "react-router";
import { getMenu } from "../../services/apiRestaurent";
import MenuItem from "./MenuItem";

export default function Menu() {
  const menuData = useLoaderData();
  console.log(menuData);

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menuData.map((menuItemData) => (
        <MenuItem key={menuItemData.id} menuItemData={menuItemData} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menuData = await getMenu();
  return menuData.data;
}
