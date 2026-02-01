import { Lock } from 'lucide-react';
export default function MainBtn({ data, onSelect }) {
  return (
    <div>
      {data.map(level => (
        <button
          key={level.id}
          onClick={() => onSelect(level)}
        >
          {level.name}  {level.locked && "🔒"}
        </button>
      ))}
    </div>
  )
}
