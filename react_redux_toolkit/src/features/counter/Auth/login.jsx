// // import React, { useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { login, logout } from '../Auth/auth.slice'; // Adjust this path as needed

// // function Login() {
// //     const dispatch = useDispatch();
// //     const { user, error } = useSelector((state) => state.auth);
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');

// //     const handleLogin = (e) => {
// //         e.preventDefault();
// //         dispatch(login({ email, password }));
// //     };

// //     return (
// //         <div>
// //             {user ? (
// //                 <>
// //                     <h3>Welcome, {user.email}</h3>
// //                     <button onClick={() => dispatch(logout())}>Logout</button>
// //                 </>
// //             ) : (
// //                 <form onSubmit={handleLogin}>
// //                     <input
// //                         type="email"
// //                         placeholder="Email"
// //                         onChange={(e) => setEmail(e.target.value)}
// //                         required
// //                     /><br />
// //                     <input
// //                         type="password"
// //                         placeholder="Password"
// //                         onChange={(e) => setPassword(e.target.value)}
// //                         required
// //                     /><br />
// //                     <button type="submit">Login</button>
// //                     {error && <p style={{ color: 'red' }}>{error}</p>}
// //                 </form>
// //             )}
// //         </div>
// //     );
// // }

// // export default Login;





// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // import { login } from '../../../authsSlice'; // Make sure this path is correct
// // import { todofetch } from '../../../toggleslice'

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const dispatch = useDispatch();
//     const { user } = useSelector((state) => state.login)
//     console.log('user: ', user);

//     const handleSubmit = (e) => {
//         console.log('Typed email:', email);
//         e.preventDefault();
//         dispatch(login({ email: email, password: password, login: true }));
//         setEmail('')
//         setPassword('')
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 className='p-2 border mb-2'
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//             />
//             <input
//                 className='p-2 border mb-2'
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//             />
//             <button className='p-2 bg-red-500 text-white' type='submit'>
//                 Login
//             </button>

//         </form>
//     );
// }

// export default Login;
