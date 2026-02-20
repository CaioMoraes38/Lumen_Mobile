import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { DefaultColors } from '@/src/utils/colors/defaultColors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: DefaultColors.button,
        tabBarInactiveTintColor: DefaultColors.text,
        tabBarStyle: { backgroundColor: DefaultColors.background, borderTopWidth: 0},
        
      }}      
      >
      <Tabs.Screen
        name="home"
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="house" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="settings" color={color} />,
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="rss-feed" color={color} />,
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="person" color={color} />,
        }}
      />
    
    </Tabs>
  );
}
