// Importa os ícones da biblioteca de ícones do Expo
// MaterialCommunityIcons possui muitos ícones predefinidos como pizza, café, etc.
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// Importa o componente Tabs do expo-router
// Tabs cria uma barra de navegação com abas na parte inferior da tela
import { Tabs } from 'expo-router';

// Função principal que configura o layout com abas
// Todos os componentes dentro dessa função aparecerão com as abas de navegação
export default function ComponentsLayout() {
  return (
    // Componente Tabs cria a navegação por abas
    <Tabs
      // screenOptions configura o estilo de todas as abas
      screenOptions={{
        // headerShown: true mostra o cabeçalho no topo da tela
        headerShown: true,
        // Estilo do cabeçalho
        headerStyle: {
          // Define a cor de fundo do cabeçalho como vermelho (#d32f2f)
          backgroundColor: '#d32f2f',
        },
        // Define a cor do texto e ícones do cabeçalho como branco
        headerTintColor: '#fff',
        // Estilo do título do cabeçalho
        headerTitleStyle: {
          // Deixa o texto do título em negrito
          fontWeight: 'bold',
        },
        // Cor da aba quando ela está ativa (vermelho)
        tabBarActiveTintColor: '#d32f2f',
        // Cor da aba quando ela está inativa (cinza)
        tabBarInactiveTintColor: '#757575',
      }}>
      // Primeira aba: Pizzas
      <Tabs.Screen
        // name: identificador interno dessa aba
        name="index"
        options={{
          // title: texto que aparece no cabeçalho da tela
          title: 'Pizzaria Delícia',
          // tabBarLabel: texto que aparece na aba (parte inferior)
          tabBarLabel: 'Pizzas',
          // tabBarIcon: função que retorna o ícone da aba
          tabBarIcon: ({ size, color }) => (
            // MaterialCommunityIcons exibe um ícone de pizza
            // size e color são passados automaticamente pelo Tabs
            <MaterialCommunityIcons name="pizza" size={size} color={color} />
          ),
        }}
      />
      
      // Segunda aba: Bebidas
      <Tabs.Screen
        // name: identificador interno dessa aba
        name="bebidas"
        options={{
          // title: texto que aparece no cabeçalho da tela
          title: 'Bebidas',
          // tabBarLabel: texto que aparece na aba (parte inferior)
          tabBarLabel: 'Bebidas',
          // tabBarIcon: função que retorna o ícone da aba
          tabBarIcon: ({ size, color }) => (
            // MaterialCommunityIcons exibe um ícone de café
            // size e color são passados automaticamente pelo Tabs
            <MaterialCommunityIcons name="coffee" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
