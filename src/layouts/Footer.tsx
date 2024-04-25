import { Image } from '../utils/Image';

const iconNames = ['notion', 'google', 'asana', 'github', 'webflow', 'tinder'];

export default function Footer() {
  return (
    <footer className="flex items-center justify-between h-[150px] p-4">
      {iconNames.map((iconName, index) => (
        <Image
          key={index}
          name={iconName}
          className="h-[72px]"
          ariaLabel={`${iconName} icon`}
        />
      ))}
    </footer>
  );
}
