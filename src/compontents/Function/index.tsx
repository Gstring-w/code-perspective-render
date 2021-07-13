interface INode{
    text:String
}

export default function Node({text}:INode) {
    return (
        <div
        style={{
          width: '100%',
          height: '100%',
          textAlign: 'center',
          lineHeight: '50px',
          border: '2px solid #9254de',
          borderRadius: 4,
          background: '#efdbff',
        }}
      >
        {text}
      </div>
    )
}
