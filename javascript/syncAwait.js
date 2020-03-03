 hitApi = async (username) => {
        console.log('hitApi :- username : ', username)
        // replace spaces by +
        username = username.replace(' ', '+')
        let url = `https://api.github.com/search/users?q=${username}`

        let result = await axios.get(url)
                    .then(res => {
                            if(res.status == 200) {
                                return res.data.items
                            }
                    })
                    .catch(err => null)
        
        //console.log(result)
        return result

    }


 handleSearch = () => {
        let response = this.hitApi(this.state.username)
        response.then((users) => {
            this.props.callbackUpdateSearchResults(users)
        })
    }


updateSearchResults = (userResults) => {
      this.setState({
        userSearchResults : userResults
      })

      console.log('app-js:- userSearchResutls : ', userResults)
  }


