const routes = require('next-routes')();

routes.add('/app', 'app');
routes.add('/', 'index');
routes.add('/privacy-policy', 'PrivacyPolicy');
routes.add('/group', 'Group');
routes.add('/gallery', 'Gallery');
routes.add('/contact', 'Contact');
routes.add('/blog', 'Blog');
routes.add('/mission', 'Mission');
routes.add('/admin', 'Admin');

module.exports = routes;
