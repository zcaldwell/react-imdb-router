import Home from './views/Home';
import MangaList from './components/MangaList/MangaList';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import MangaCard from './components/MangaCard/MangaCard';

export default function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/MangaList/:id" component={MangaCard} />
          <Route path="/MangaList " component={MangaList} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}
