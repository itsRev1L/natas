export default function MainBtn({ data, onSelect }) {
  return (
    <div>
      {data.map(level => (
        <button
          key={level.id}
          onClick={() => onSelect(level)}
        >
          {level.name}
        </button>
      ))}
    </div>
  )
}
