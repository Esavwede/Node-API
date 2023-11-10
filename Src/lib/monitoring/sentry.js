const Sentry = require('@sentry/node')
const { ProfilingIntegration } = require('@sentry/profiling-node')

function AppMonitoring(app)
{
    try 
    {
        Sentry.init({
            dsn: process.env.SENTRY_KEY,
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