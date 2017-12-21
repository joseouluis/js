using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace _001_code.Models
{
    public class Pedido {
        public int Id { get; set; }
        public String Descricao { get; set; }
        public double ValorTotal{ get; set; }
    }
}