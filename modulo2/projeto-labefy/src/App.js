import React from 'react';
// import CriarPlayListPage from './pages/CriarPlayListPage/CriarPlayListPage';
import PlayListDetailPage from './pages/PlayListDetailPage/PlayListDetailPage';
import PlayListPage from './pages/PlayListPage/PlayListPage';

class App extends React.Component {
  state={
    // currentScreen:'list',
    currentScreen:'list',
    playListid: '',
   }

   onClickChangingPageToDetail =(id) => {
      
      this.setState({
        currentScreen: 'detail',
        playListid: id,
      })
   }

   onClickGotoList =()=>{
      this.setState({
        currentScreen: 'list'
      })
   }

   


    selectPage =()=> { 
      switch(this.state.currentScreen){ 
          case 'list': 
          return <PlayListPage         
          onClickChangingPageToDetail={this.onClickChangingPageToDetail}/>
          case 'detail': 
          return <PlayListDetailPage 
           listId={this.state.playListid}
           onClickGotoList={this.onClickGotoList}/>
          // case 'criar': 
          // return <CriarPlayListPage/>
          default:
            return <PlayListPage         
            onClickChangingPageToDetail={this.onClickChangingPageToDetail}/>
      }
    }


  render(){

    return (
      <div>
         {this.selectPage()}
    </div>
  );
}
}

export default App;
