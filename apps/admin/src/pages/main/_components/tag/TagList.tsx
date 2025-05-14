import { Icon } from "@linenow/core/components";
import Tag from "./Tag";
import {
  TagListWrapper,
  TagListContainer,
  TagRefreshContainer,
} from "./Tag.styled";

interface TagListProps {
  selectedTag: string;
  onTagClick: (tag: string) => void;
  waiting?: number;
  calling?: number;
  arrived?: number;
  canceled?: number;
}

const TagList = ({
  selectedTag,
  onTagClick,
  waiting,
  calling,
  arrived,
  canceled,
}: TagListProps) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <TagListWrapper>
      <TagListContainer>
        <Tag
          label="전체보기"
          isSelected={selectedTag === "전체보기"}
          onClick={() => onTagClick("전체보기")}
        />
        <Tag
          imageUrl="/images/tag_white.png"
          label={`대기 중 ${waiting}팀`}
          isSelected={selectedTag === "대기 중"}
          onClick={() => onTagClick("대기 중")}
        />
        <Tag
          imageUrl="/images/tag_green.png"
          label={`호출 중 ${calling}팀`}
          isSelected={selectedTag === "호출 중"}
          onClick={() => onTagClick("호출 중")}
        />
        <Tag
          label={`입장 완료 ${arrived}팀`}
          isSelected={selectedTag === "입장 완료"}
          onClick={() => onTagClick("입장 완료")}
        />
        <Tag
          label={`대기 취소 ${canceled}팀`}
          isSelected={selectedTag === "대기 취소"}
          onClick={() => onTagClick("대기 취소")}
        />
      </TagListContainer>
      {handleRefresh && (
        <TagRefreshContainer onClick={handleRefresh}>
          <Icon icon="refresh" color="gray" />
        </TagRefreshContainer>
      )}
    </TagListWrapper>
  );
};

export default TagList;
