
import ConversaCaraHome from '../components/conversa-cara/ConversaCaraHome';
import WhatsAppButton from '../components/home/WhatsAppButton';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Nossos Sites</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Conversa Cara</h2>
            <p className="mb-6 text-gray-600">Podcast com conversas que valem mais do que um MBA.</p>
            <Link to="/index">
              <Button>Visitar Site</Button>
            </Link>
          </div>
          <div className="border p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Madis BPO</h2>
            <p className="mb-6 text-gray-600">Terceirização inteligente da gestão de ponto e acesso.</p>
            <Link to="/madis-bpo">
              <Button>Visitar Site</Button>
            </Link>
          </div>
        </div>
      </div>
      <ConversaCaraHome />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
