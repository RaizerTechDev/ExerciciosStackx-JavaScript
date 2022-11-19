from tables.restaurante import Restaurante


def test_pedidos_na_fila_valor_inicial_padrao_igual_a_zero():
  restaurante = Restaurante("Pizzaria X")
  assert restaurante.pedidos_na_fila == 0