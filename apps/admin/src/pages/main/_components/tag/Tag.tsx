// Tag.tsx
import { TagWrapper, TagImage } from "./Tag.styled";

export interface Tagprops {
  label: string;
  imageUrl?: string;
  onClick?: () => void;
  $isSelected?: boolean;
}

const Tag = ({ label, imageUrl, onClick, $isSelected }: Tagprops) => {
  return (
    <TagWrapper onClick={onClick} $isSelected={$isSelected}>
      {imageUrl && <TagImage src={imageUrl} alt="status icon" />}
      <span>{label}</span>
    </TagWrapper>
  );
};

export default Tag;
