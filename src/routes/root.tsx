import '../App.css';
import AppLayout from '../components/globals/app-layout';
import Category from '../components/home/category.tsx';
import fakedatas from '../datas/fake/home-categories.json';

function Root() { 
  return (
      <AppLayout>
        {fakedatas.map((category, index) => ( 
          <Category key={index} category={category} />
        ))}
      </AppLayout>
  )
}

export default Root;
