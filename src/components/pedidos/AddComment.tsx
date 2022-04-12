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
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const addComment = async () => {
    setIsSaving(true);
    await CartService.addCommentToOrder(order, newComment);
    afterSave();
    setNewComment("");
    setIsSaving(false);
  };
  return (
    <>
      <textarea
        className="textarea  is-size-5"
        placeholder="Adicione o comentário aqui"
        value={newComment}
        onChange={(e: any) => setNewComment(e.target.value)}
      />
      <button
        className={`button is-medium mt-2 is-primary ${
          isSaving ? "is-loading" : ""
        }`}
        onClick={addComment}
        disabled={isSaving}
      >
        Salvar
      </button>
    </>
  );
};
