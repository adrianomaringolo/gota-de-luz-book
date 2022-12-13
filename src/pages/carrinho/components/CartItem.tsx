import { CartItemType, CartService } from "services/CartService";
import { formatCurrency } from "utils/format";

type CartItemProps = {
  item: CartItemType;
};

export const CartItem = ({ item }: CartItemProps) => {
  return (
    <div key={`${item.id}`} className="item">
      <button
        className="remove-button"
        title="Remover item do carrinho"
        onClick={() => CartService.removeItem(item.id)}
      >
        <img src="/images/icons/trash.svg" alt="Ícone de lixo" />
      </button>

      <input
        onChange={(event) => {
          CartService.editItemAmount(item.id, Number(event.target.value));
        }}
        type="number"
        min={0}
        value={item.amount}
        style={{ width: 60, marginRight: "10px" }}
      />
      <div className="item-price" style={!item.amount ? { color: "#ccc" } : {}}>
        {formatCurrency(item.price * (item.amount || 0))}
      </div>
      <div
        className="product-name"
        style={!item.amount ? { color: "#aaa" } : {}}
      >
        [{item.type}] {item.name}
      </div>
    </div>
  );
};
