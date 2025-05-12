// 'use client';

// import { useDispatch, useSelector } from 'react-redux';
// import { increment, decrement } from '@/redux/features/cartSlice'; // adjust path accordingly

// export default function TestRedux() {
//   const count = useSelector((state) => state.cart.count); // assuming `count` exists
//   const dispatch = useDispatch();

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold">Redux Test</h1>
//       <p className="mt-2">Count: {count}</p>
//       <div className="mt-4 flex gap-4">
//         <button
//           onClick={() => dispatch(increment())}
//           className="px-4 py-2 bg-green-500 text-white rounded"
//         >
//           Increment
//         </button>
//         <button
//           onClick={() => dispatch(decrement())}
//           className="px-4 py-2 bg-red-500 text-white rounded"
//         >
//           Decrement
//         </button>
//       </div>
//     </div>
//   );
// }
