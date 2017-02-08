import Dashboard from './components/Dashboard'

export default function dashboardPlugin (context) {
  context.on('application:routes', (opts) => {
    console.info('dashboardPlugin - application:routes')
    console.log('dashboardPlugin - application:routes', opts)

    opts.nextState.routes.push({
      label: 'Dashboard',
      path: 'dashboard',
      name: 'dashboard',
      component: Dashboard
    })
    console.log('dashboardPlugin - application:routes - return', opts)
    return opts
  })
}