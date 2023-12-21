import EmptyState from '../components/EmptyState';

const People = () => {
  return (
    <div className="hidden lg:block lg:pl-80 h-full">
      <EmptyState />
    </div>
   );
}
 
export default People;

// import {signOut} from 'next-auth/react'
{/* <button onClick={()=>signOut()}>logout</button> */}