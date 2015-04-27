package prjone.applifire.config;import java.util.EnumSet;

import javax.servlet.FilterRegistration;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;
import javax.servlet.SessionTrackingMode;

import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;
import com.applifire.appsetUp.model.AppConfiguration;
import java.io.File;

/**
 *
 *
 * @author Anant
 *
 */
@Configuration       
public class WebInitializer implements WebApplicationInitializer {

    private final String APP_PKG = getPackage();
    private final String SOLR_HOME = getSolrHome();

    @Override
    public void onStartup(ServletContext servletContext) throws ServletException {
        WebApplicationContext context = getContext();
        ServletRegistration.Dynamic dispatcher = servletContext.addServlet("DispatcherServlet", new DispatcherServlet(context));
        dispatcher.setLoadOnStartup(1);
     
        dispatcher.addMapping("/secure/*");
        
        servletContext.addListener(new ContextLoaderListener(context));
        servletContext.setSessionTrackingModes(EnumSet.of(SessionTrackingMode.COOKIE));
        
        setSystemProperty("solr.solr.home",getSolrHomeDir(servletContext));
        setSolrDispatcher(servletContext);
    }

    private AnnotationConfigWebApplicationContext getContext() {
        AnnotationConfigWebApplicationContext context = new AnnotationConfigWebApplicationContext();
        context.setConfigLocation(APP_PKG);
        return context;
    }
    
    public void setSystemProperty(String propertyName, String propertyValue) {
		System.setProperty(propertyName, propertyValue);
	}

	public void setSolrDispatcher(ServletContext servletContext) {
		FilterRegistration.Dynamic dynaFilterReg = servletContext.addFilter("SolrRequestFilter", "org.apache.solr.servlet.SolrDispatchFilter");
		dynaFilterReg.addMappingForUrlPatterns(null, true, "/*");

	}
	public String getSolrHomeDir(ServletContext servletContext){
		AppConfiguration appConfiguration=appSetup(servletContext);
		return appConfiguration.getSolrProperties()!=null&&appConfiguration.getSolrProperties().getSolrHome()!=null&&appConfiguration.getSolrProperties().getSolrHome().length()>0?appConfiguration.getSolrProperties().getSolrHome():SOLR_HOME;
	}
	
	public AppConfiguration appSetup(ServletContext servletContext) {
		com.applifire.app.xmlParser.AppXMLLoader appXMLLoader = null;
		try {
			appXMLLoader = new com.applifire.app.xmlParser.AppXMLLoader();
			appXMLLoader.loadAppProperties(new File(servletContext.getRealPath("/WEB-INF/conf/appConfiguration.xml")));
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return appXMLLoader.getAppConfiguration();
	}
	

}
