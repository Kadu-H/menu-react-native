// Importa Slot do expo-router.
// - Slot é um componente especial que diz ao roteador onde colocar as rotas-filhas.
//   Quando você tem arquivos de rota dentro de uma pasta (por exemplo `src/app/components`),
//   o conteúdo dessas rotas será renderizado onde o <Slot /> estiver.
import { Slot } from 'expo-router';

// Importa o StatusBar do pacote expo-status-bar.
// - StatusBar permite controlar a aparência da barra de status do sistema (horário, bateria, etc.).
import { StatusBar } from 'expo-status-bar';

// Importa um hook customizado que você criou.
// - useFrameworkReady é apenas uma função que roda algum código de inicialização (ex.: carregar fontes).
//   Aqui estamos só chamando ela para garantir que qualquer preparação necessária aconteça.
import { useFrameworkReady } from '../hooks/useFrameworkReady';

// Exporta o componente padrão chamado RootLayout.
// Em expo-router, arquivos `_layout.jsx` ou `_layout.tsx` definem o layout/padrão para as rotas dentro da pasta.
export default function RootLayout() {
  // Chama o hook de inicialização. Como é um hook, ele pode executar efeitos (useEffect) internamente.
  // Isso prepara o app antes de mostrar as rotas (por exemplo, garantir que fontes estejam carregadas).
  useFrameworkReady();

  // Comentário explicativo:
  // O layout precisa renderizar um Slot (ou um navigator) no primeiro render,
  // assim o expo-router sabe onde colocar as rotas-filhas (ex.: /components).
  // Abaixo estamos retornando dois elementos:
  // - <Slot />: lugar onde as rotas-filhas serão montadas.
  // - <StatusBar />: componente que controla a barra de status do dispositivo.
  return (
    <>
      {/* <Slot /> é o espaço reservado onde o conteúdo das rotas-filhas aparecerá. */}
      <Slot />

      {/* StatusBar controla a aparência da barra de status — 'style="auto"' escolhe automaticamente o melhor contraste. */}
      <StatusBar style="auto" />
    </>
  );
}