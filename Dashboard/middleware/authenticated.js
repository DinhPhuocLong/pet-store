
export default function(context) {
    const { redirect, $auth } = context;
    if (!$auth.logged) {
        redirect('/');
    } 
}