class AllItems extends React.Component {
  handleDelete(id) {
    this.props.handleDelete(id);
  }

  handleUpdate(item) {
    this.props.handleUpdate(item);
  }

  render() {
    var items= this.props.items.map((item) => {
      return (
        <div key={item.id}>
          <Item item={item}
                handleDelete={this.handleDelete.bind(this, item.id)}
                handleUpdate={this.handleUpdate.bind(this)}/>
        </div>
      )
    });

    return(
      <div>
        {items}
      </div>
    )
  }

}