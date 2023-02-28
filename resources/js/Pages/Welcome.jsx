/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
//import './components/Example';


export default function Welcome({ user }) {
    return (
        <>
            <h1>Welcome</h1><p>Hello {user.name}, welcome to your first Inertia app!</p>
        </>
    )
}
