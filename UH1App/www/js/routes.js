angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu2',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.motDuPresidentEtChiffre', {
    url: '/motPresidentEtChiffre',
    views: {
      'side-menu21': {
        templateUrl: 'templates/motDuPresidentEtChiffre.html',
        controller: 'motDuPresidentEtChiffreCtrl'
      }
    }
  })

  .state('menu.motPresident', {
    url: '/motPresident',
    views: {
      'side-menu21': {
        templateUrl: 'templates/motPresident.html',
        controller: 'motPresidentCtrl'
      }
    }
  })

  .state('menu.quoiDeNeuf', {
    url: '/quoiDeNeuf',
    views: {
      'side-menu21': {
        templateUrl: 'templates/quoiDeNeuf.html',
        controller: 'quoiDeNeufCtrl'
      }
    }
  })

  .state('menu.annuaireEtContact', {
    url: '/AnnuaireEtContact',
    views: {
      'side-menu21': {
        templateUrl: 'templates/annuaireEtContact.html',
        controller: 'annuaireEtContactCtrl'
      }
    }
  })

  .state('menu.servicesAuxEtudiants', {
    url: '/servicesAuxEtudiants',
    views: {
      'side-menu21': {
        templateUrl: 'templates/servicesAuxEtudiants.html',
        controller: 'servicesAuxEtudiantsCtrl'
      }
    }
  })

  .state('menu.login', {
    url: '/login',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('menu.actualitS', {
    url: '/ActualitésItem',
    views: {
      'side-menu21': {
        templateUrl: 'templates/actualitS.html',
        controller: 'actualitSCtrl'
      }
    }
  })

  .state('menu.publicitS', {
    url: '/publiciteItem',
    views: {
      'side-menu21': {
        templateUrl: 'templates/publicitS.html',
        controller: 'publicitSCtrl'
      }
    }
  })

  .state('menu.agendaCalendrier', {
    url: '/AgendaItem',
    views: {
      'side-menu21': {
        templateUrl: 'templates/agendaCalendrier.html',
        controller: 'agendaCalendrierCtrl'
      }
    }
  })

  .state('menu.localisation', {
    url: '/Localisation',
    views: {
      'side-menu21': {
        templateUrl: 'templates/localisation.html',
        controller: 'localisationCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu2/home')

  

});