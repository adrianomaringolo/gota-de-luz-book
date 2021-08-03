import { useState } from "react";
import { CartService } from "../../services/CartService";

export const AddComment = ({
  order,
  afterSave,
}: {
  order: any;
  afterSave: any;
}) => {
  const [newComment, setNewComment] = useState<string>("");
  const addComment = async () => {
    await CartService.addCommentToOrder(order, newComment);
    afterSave();
    setNewComment("");
  };
  return (
    <>
      <textarea
        className="textarea  is-size-5"
        placeholder="Adicione o comentário aqui"
        value={newComment}
        onChange={(e: any) => setNewComment(e.target.value)}
      />
      <button className="button is-medium mt-2 is-primary" onClick={addComment}>
        Salvar
      </button>
    </>
  );
};
