import { useAppSelector } from "../../../store/hooks/redux";
import { NavigationItem } from "./NavigationItem";
import { Vector } from "./Vector";

export const Navigation = () => {
  const { item } = useAppSelector((state) => state.navReducer);

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        {item.map((item, index) => (
          <NavigationItem key={index} name={item.name} link={item.link} />
        ))}
      </ul>
      <Vector />
    </nav>
  );
};
