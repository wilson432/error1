
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import BannerMovies from '../../components/bannerFilmes';
import CardMovies from '../../components/cardMovies';
import Header from '../../components/header';
import SearchBar from '../../components/searchbar';
import Filmes from '../../data/movies'
import { useEffect,useState } from 'react';

export default function App() {

  const [movies,setMovies] = useState();

  
useEffect(()=>{

  async function buscarFilmes(){
    const response = await fetch('https://api.openf1.org/v1/drivers?&session_key=9158')
    const data = await response.json()
    console.log(data.results)

    setMovies(data.results);
  }

  buscarFilmes();



  
},[]  )



  return (
    <View style={styles.container}>
     <Header></Header>

     <SearchBar></SearchBar>

     <BannerMovies></BannerMovies>
     
    
     <View style = {{width :"90%"}}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={movies}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              
              <CardMovies
                titulo={item.full_name}
                imagem={item.headshot_url}
                nota={item.driver_number}
              />
            )}
          />
        </View>
    
  

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#141a29',
    alignItems:'center'
    
    
  },
});
