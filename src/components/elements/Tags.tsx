import 'styles/elements/tags.css'

interface Tag {
  label: string
}

interface TagsProps {
  tags: Tag[]
}

const Tags = ({tags}: TagsProps) => {
  return (
    <div className="tags-list">
        {tags.map((tag, index) => (
            <div key={index} className="tag">
            {tag.label}
            </div>
        ))}
    </div>
  );
};

export default Tags;