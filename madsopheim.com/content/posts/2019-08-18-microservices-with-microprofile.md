Welcome to the world of microservices! We now can provide you with the tools you miss from your time with Java EE, while still leaving you free to switch application server whenever you want, without having to change your Java code.

Sounds too good to be true? It’s not, it’s <a href="https://microprofile.io">MicroProfile</a>.

Switching from TomEE to Payara Micro to OpenLiberty to Quarkus does only require changes in the configuration, pom files and such, you can leave your application code pretty much untouched. These application servers have in common that they all implement the MicroProfile standard.

What is MicroProfile then? Easily said, it’s Jakarta EE for microservices. MicroProfile is to microservices what Jakarta EE is to monoliths. It’s a collection of those tools from Jakarta EE that is suitable for a typical REST, JSON based architecture, including JAX-RS and CDI. In addition, there are several features specifically made for MicroProfile, such as config and health check.

Where their functionalities overlap, MicroProfile uses the same implementations as Jakarta EE. Hence, the threshold for changing MicroProfile code is low if you're already familiar with Jakarta EE.

Just like Jakarta EE, MicroProfile is a standard. A lot of vendors provide their own implementation, including the likes of RedHat, IBM, Payara and Tomitribe, but also smaller companies like Kumuluz. It's also backed by Microsoft, Fujitsu and a lot of other companies that don't provide their own application server, but do support the initiative.

This means that you can keep exactly the same Java code when you switch from one application server to the other, changing only the configuration files. This way, the risk of doing a suboptimal appserver choice early on is minimized.

It also means that you can switch projects and find familiar code concepts and structures in the new project as in the previous, quite similar to the situation in for instance the current Angular or React ecosystem.	

A surprisingly big part of MicroProfile is concerning operations, so it’s easy to see that it’s being created in the age of DevOps. The upcoming features in the next version is about reactive programming, so it’s fair to say that the development roadmap is somewhat hype-driven.

However, most application servers lets you choose freely which features to bring into your system, and the unused features won’t even be included, using OSGi technology.

Another thing that's fascinating with MicroProfile, is the diverse and broad backing they have from large application server creators such as IBM and Tomitribe, unrelated huge companies like Fujitsu and Microsoft, and lesser-known application server creators like Kumuluz.

Along with colleague <a href="https://mehmandarov.com">Rustam Mehmandarov</a>, I've used MicroProfile to create a system, where our example domain is controlling the lights in our company's office.

This system currently has four microservices, all using MicroProfile, each running on either Thorntail, Quarkus or OpenLiberty. There, you can see how it works in real, working code, and how little code that is actually needed to utilize the different features. It’s available at <a href="https://github.com/mehmandarov/microprofile-iot/issues">GitHub</a> (and yes, we do appreciate pull requests)

You can also see us giving a talk about MicroProfile and this system over on <a href="https://www.youtube.com/watch?v=Kp5NRcbDvOk">YouTube</a>.