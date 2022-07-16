<script >
  import Router from 'svelte-spa-router'
  import Login from './pages/Login.svelte'
  import Admin from './pages/Admin.svelte'
  const routes = {

    "/":Login,
    "/admin/*":Admin

  }
</script>

<div>
  <Router {routes}/>

</div>