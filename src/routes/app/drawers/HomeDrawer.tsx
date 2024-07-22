import { createDrawerNavigator } from '@react-navigation/drawer';
import AllCategory from 'screens/app/drawer/home/AllCategory';

const Drawer = createDrawerNavigator();

function HomeDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="AllCategory" component={AllCategory} />
    </Drawer.Navigator>
  );
}

export default HomeDrawer;