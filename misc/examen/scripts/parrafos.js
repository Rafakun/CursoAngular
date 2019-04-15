			
			function addParrafo()
			{
				let padre = document.getElementById('respuesta');

				let long = padre.childNodes.length;

				let p = document.createElement('p');
				let texto = document.createTextNode('Parrafo ' + (long-2));

				p.appendChild(texto);
				padre.insertBefore(p, padre.childNodes[long-1]);

				p.addEventListener("click", function(){eliminar(long-1);});
			}
			
			function eliminar(numero)
			{
				console.log(numero)
				let padre = document.getElementById('respuesta');

				let hijo = padre.getElementsByTagName('p')[numero];
				let h1 = padre.getElementsByTagName('h1')[0];
				let boton = padre.getElementsByTagName('input')[0];
				if(padre.getElementsByTagName('p').length == 1)
				{
					padre.removeChild(hijo);
					padre.removeChild(h1);
					padre.removeChild(boton);
					miFormulario.btn_lanzar.style.display = "block";
				}
				else
				{
					padre.removeChild(hijo);
				}

				
			}
			
			function lanzar()
			{
				let titulo = miFormulario.titulo.value;
				let numero = miFormulario.numero.value;

				var padre = document.getElementById('respuesta');

				let h1 = document.createElement('h1');
				let tit = document.createTextNode(titulo);

				h1.appendChild(tit);

				padre.appendChild(h1);

				for(let i = 1; i <= numero;i++)
				{
					let p = document.createElement('p');
					let texto = document.createTextNode('Parrafo ' + i);

					p.appendChild(texto);
					padre.appendChild(p);

					let numero = i-1;

					p.addEventListener("click", function(){eliminar(numero);});
				}
				
				let boton = document.createElement('input');
				padre.appendChild(boton);

				let input = padre.getElementsByTagName('input')[0];

				input.setAttribute('type', 'button');
				input.setAttribute('value', 'Añadir');

				boton.addEventListener("click", addParrafo);

				miFormulario.btn_lanzar.style.display = "none";

			}


			function validar()
			{
				let titulo = miFormulario.titulo.value;
				let numero = miFormulario.numero.value;

				if(/^\s+$/.test(numero)||(numero=="")||numero.length==0)
				{

						return false;
				}

				if(!/^[A-Z]{5,20}$/.test(titulo))
				{
					miFormulario.titulo.style.backgroundColor = "red";
					alert("EL TITULO SOLO EN MAYUSCULAS DE 5 A 20 CARACTERES");
					return false;
				}
				else
				{
					miFormulario.titulo.style.backgroundColor = "white";
				}
				if(!/^([0-9]|10)$/.test(numero))
				{
					return false;
				}
			}
			
			
            window.onload = function() {
				let titulo = miFormulario.titulo;
				let numero = miFormulario.numero;

				titulo.onblur=validar;
				numero.onblur=validar;
			
			}		