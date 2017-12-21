using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers {
	public class ContatoController : ApiController {
		[HttpPost]
		public void Criar([FromBody] Contato contato) {
			if (string.IsNullOrWhiteSpace(contato.Nome) == true) {
				throw new ArgumentException("Nome");
			}
			if (string.IsNullOrWhiteSpace(contato.Endereco) == true) {
				throw new ArgumentException("Endereco");
			}
			if (contato.Nascimento < new DateTime(1900, 1, 1)) {
				throw new ArgumentException("Nascimento");
			}
			if (string.IsNullOrWhiteSpace(contato.Telefone) == true) {
				throw new ArgumentException("Telefone");
			}
			// INSERT no banco!
		}

		[HttpPost]
		public bool Salvar([FromBody] Contato contato) {
			if (string.IsNullOrWhiteSpace(contato.Nome) == true) {
				throw new ArgumentException("Nome");
			}
			if (string.IsNullOrWhiteSpace(contato.Endereco) == true) {
				throw new ArgumentException("Endereco");
			}
			if (contato.Nascimento < new DateTime(1900, 1, 1)) {
				throw new ArgumentException("Nascimento");
			}
			if (string.IsNullOrWhiteSpace(contato.Telefone) == true) {
				throw new ArgumentException("Telefone");
			}
			// UPDATE no banco!
			return true;
		}

		[HttpGet]
		public bool Excluir(int id) {
			//DELETE no banco!
			return true;
		}

		[HttpGet]
		public List<Contato> Listar() {
			List<Contato> lista = new List<Contato>();

			lista.Add(new Contato() {
				Id = 4,
				Nome = "Alex",
				Endereco = "Rua X",
				Nascimento = new DateTime(1980, 1, 11)
			});

			lista.Add(new Contato() {
				Id = 2,
				Nome = "Barbosa",
				Endereco = "Rua Y",
				Nascimento = new DateTime(1999, 12, 4)
			});

			lista.Add(new Contato() {
				Id = 8,
				Nome = "Carlos",
				Endereco = "Rua Z",
				Nascimento = new DateTime(1983, 10, 14)
			});

			return lista;
		}

		[HttpGet]
		public Contato Obter(int id) {
			if (id == 4) {
				return new Contato() {
					Id = 4,
					Nome = "Alex",
					Endereco = "Rua X",
					Nascimento = new DateTime(1980, 1, 11)
				};
			}

			if (id == 2) {
				return new Contato() {
					Id = 2,
					Nome = "Barbosa",
					Endereco = "Rua Y",
					Nascimento = new DateTime(1999, 12, 4)
				};
			}

			return null;
		}
	}
}
