import './App.css';
import { Container } from './components/Container';
import { Image, Tile } from './components/Tile';
import personalPhoto from './images/personal-photo.jpg'

function App() {
  return (
    <Container>
      <Tile>
        <Image src={personalPhoto} alt="" />
      </Tile>
    </Container >
  );
}

export default App;
