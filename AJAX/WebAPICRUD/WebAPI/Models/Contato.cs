using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Contato
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Endereco { get; set; }
        public DateTime Nascimento { get; set; }
		public string NascimentoStr {
			get {
				return Nascimento.ToString("dd/MM/yyyy");
			}
		}
        public string Telefone { set; get; }
    }
}
