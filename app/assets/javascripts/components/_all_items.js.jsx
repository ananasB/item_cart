class AllItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    const url = "/api/v1/items.json";
    fetch(url)
      .then(res =>   res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
        console.log(this.state.items)
      })
  }

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    }
    else {
      return (
        <div className="cards">
          {items.map( item => 
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div> 
          )}
        </div>
      )
    }
  }

}