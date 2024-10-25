function Cor(props) {
    const estiloParagrafo = {
      color: props.isHighlighted ? 'yellow' : 'orange',
      fontSize: '18px',
    };
  
    return (
      <p style={estiloParagrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis accusantium iure excepturi, voluptate at quidem consequuntur tempora possimus! Quasi eligendi asperiores, fuga a sapiente accusantium quia neque voluptate porroa?
      </p>
    );
  }
  
  export default Cor