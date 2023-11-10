const Sentry = require('@sentry/node')
const { ProfilingIntegration } = require('@sentry/profiling-node')

function AppMonitoring(app)
{
    try 
    {
        Sentry.init({
            dsn: 'https://9acb8f71bf93cf2a0a8f9cb934492df0@o4506200956338176.ingest.sentry.io/4506200959287296',
            integrations: [
              // enable HTTP calls tracing
              new Sentry.Integrations.Http({ tracing: true }),
              // enable Express.js middleware tracing
              new Sentry.Integrations.Express({ app }),
              new ProfilingIntegration(),
            ],
            // Performance Monitoring
            tracesSampleRate: 1.0,
            // Set sampling rate for profiling - this is relative to tracesSampleRate
            profilesSampleRate: 1.0,
          });


        // The request handler must be the first middleware on the app
        app.use(Sentry.Handlers.requestHandler());

        // TracingHandler creates a trace for every incoming request
        app.use(Sentry.Handlers.tracingHandler());

        // The error handler must be registered before any other error middleware and after all controllers
        app.use(Sentry.Handlers.errorHandler());


    }
    catch(e)
    {
        console.log("Sentry Initialization Error ")
        console.log(e) 
    }
}

module.exports = AppMonitoring